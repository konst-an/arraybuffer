import getBuffer from '../src/getBuffer';
import ArrayBufferConverter from '../src/ArrayBufferConverter';

test('Метод load сохраняет buffer', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();

    converter.load(buffer);

    expect(converter.buffer).toBe(buffer);
});

test('toString возвращает корректную строку', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();

    converter.load(buffer);

    const result = converter.toString();

    expect(result).toBe(
        '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
    );
});

test('toString без загрузки возвращает пустую строку', () => {
    const converter = new ArrayBufferConverter();

    expect(converter.toString()).toBe('');
});