// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"name": "my kit",
	"cardId": 1
}

test('Should delete kit', async () => {

	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}


	let actualResponseBody = await response.json();
	let actualId = actualResponseBody.id; 

	let deleteStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${actualId}`, {
			method: 'DELETE',
		});
		deleteStatus = response.status;

	} catch (error) {
		console.error(error);
	}
	expect(deleteStatus).toBe(200);
});
test('Should contain ok true', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}


	let actualResponseBody1 = await response.json();
	let actualId = actualResponseBody1.id; 

let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${actualId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();  
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.ok).toBe(true);
});	

