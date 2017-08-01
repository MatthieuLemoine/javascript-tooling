import { out } from './index';

describe('Module', () => {
  describe('out', () => {
    test('should write on standard output', () => {
      const writeMock = jest.fn();
      const input = 'Hello world';
      process.stdout.write = writeMock;
      out(input);
      expect(writeMock.mock.calls.length).toBe(1);
      expect(writeMock.mock.calls[0][0]).toBe(`${input}\n`);
    });
    test('should concatenate arguments into a sentence', () => {
      const writeMock = jest.fn();
      const inputs = ['Hello', 'world', '!'];
      process.stdout.write = writeMock;
      out(...inputs);
      expect(writeMock.mock.calls.length).toBe(1);
      expect(writeMock.mock.calls[0][0]).toBe('Hello world !\n');
    });
  });
});
