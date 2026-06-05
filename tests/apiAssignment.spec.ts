import { test, expect } from '@playwright/test';

test('GET Product Details', async ({ request }) => {

  const response = await request.get(
    'https://fakestoreapi.com/products/1'
  );

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  console.log('GET Response:', responseBody);
});

test('Create User POST', async ({ request }) => {

  const response = await request.post(
    'https://reqres.in/api/users',
    {
      data: {
        name: 'James',
        job: 'leader'
      }
    }
  );

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  console.log('POST Response:', responseBody);
});

test('Update User PUT', async ({ request }) => {

  const response = await request.put(
    'https://reqres.in/api/users/2',
    {
      data: {
        name: 'Jill',
        job: 'Software Engineer'
      }
    }
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  console.log('PUT Response:', responseBody);
});

test('Delete User', async ({ request }) => {

  const response = await request.delete(
    'https://reqres.in/api/users/2'
  );

  expect(response.status()).toBe(204);

  console.log('User deleted successfully');
});