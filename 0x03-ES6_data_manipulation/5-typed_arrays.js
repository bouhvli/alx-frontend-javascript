export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const int8view = new Int8Array(buffer);

  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  } else {
    int8view[position] = value;
  }
  return new DataView(buffer);
}
