const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:5000/api/admin';

async function runTests() {
    try {
        console.log('--- Starting Verification ---');

        // 1. Signup
        console.log('\n[1] Testing Signup...');
        const uniqueSuffix = Date.now();
        const userCreds = {
            name: 'Test Admin',
            email: `admin_${uniqueSuffix}@test.com`,
            password: 'password123'
        };

        let response = await fetch(`${BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userCreds)
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(`Signup failed: ${err}`);
        }
        const user = await response.json();
        console.log('Signup Successful:', user.email);

        // 2. Login
        console.log('\n[2] Testing Login...');
        response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: userCreds.email, password: userCreds.password })
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(`Login failed: ${err}`);
        }
        const authData = await response.json();
        const token = authData.token;
        console.log('Login Successful, Token received.');

        // 3. Create Business
        console.log('\n[3] Testing Create Business...');
        const businessData = {
            name: `Business_${uniqueSuffix}`,
            description: 'A test business'
        };

        response = await fetch(`${BASE_URL}/businesses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(businessData)
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(`Create Business failed: ${err}`);
        }
        const business = await response.json();
        console.log('Business Created:', business._id);

        // 4. Upload Dataset
        console.log('\n[4] Testing Dataset Upload...');
        const formData = new FormData();
        const fileContent = fs.readFileSync(path.join(__dirname, 'dummy_data.csv'));
        const blob = new Blob([fileContent], { type: 'text/csv' });

        formData.append('dataset', blob, 'dummy_data.csv');
        formData.append('businessId', business._id);

        response = await fetch(`${BASE_URL}/datasets`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(`Dataset Upload failed: ${err}`);
        }
        const dataset = await response.json();
        console.log('Dataset Uploaded:', dataset._id);

        console.log('\n--- Verification Completed Successfully ---');

    } catch (error) {
        console.error('\n!!! Verification Failed !!!');
        console.error(error);
    }
}

runTests();
