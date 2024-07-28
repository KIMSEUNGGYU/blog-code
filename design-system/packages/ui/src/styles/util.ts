/**
 * @desc
 * - tailwindcss 를 사용하기 위해 class 요소임을 확인하기 위해 .class 로 변환
 * @example
 * - B1 -> .B1, B2 -> .B2 .,..
 */
export function createDotKey(classValue: Record<string, Record<string, string>>) {
    return Object.entries(classValue).reduce<Record<string, Record<string, string>>>(
      (acc, [key, value]) => ({
        ...acc,
        [`.${key}`]: value,
      }),
      {},
    );
}