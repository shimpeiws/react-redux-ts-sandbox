import { ActionDispatcher } from '../../src/counter/Container';
import mockAxios from 'jest-mock-axios';

afterEach(() => {
  mockAxios.reset();
});

function mockDispatch(): jest.Mock<void, [any]> {
  return jest.fn((action: any) => {
    return;
  });
}

function initActionDispatcher(mockDispatch: any): any {
  return new ActionDispatcher(mockDispatch);
}

test('increment', () => {
  const dispatch = mockDispatch();
  const actionDispatcher = initActionDispatcher(dispatch);
  actionDispatcher.increment(1);
  expect(dispatch.mock.calls.length).toBe(1);
  expect(dispatch.mock.calls[0][0]).toMatchObject({ plusAmount: 1, type: 'counter/increment' });
});

describe('asyncIncrement', () => {
  test('success', async () => {
    const dispatch = mockDispatch();
    const actionDispatcher = initActionDispatcher(dispatch);
    mockAxios.get.mockResolvedValue({ status: 200, data: { message: 'hello' } });
    await actionDispatcher.asyncIncrement();
    expect(dispatch.mock.calls.length).toBe(3);
    expect(dispatch.mock.calls[0][0]).toMatchObject({ type: 'counter/fetch_request_start' });
    expect(dispatch.mock.calls[1][0]).toMatchObject({ plusAmount: 100, type: 'counter/increment' });
    expect(dispatch.mock.calls[2][0]).toMatchObject({
      type: 'counter/fetch_request_finish'
    });
  });
});
