//이것은 자바스크립트 함수가 아닌 자스 함수이다. 
describe('자스민 테스트입니다.', () =>{
    //it 함수: 함수의 테스트 유닛입니다. 첫번째 인자로 함수의 설명, 두번째 인자로 테스트 할 함수를 전달합니다. 
    it('더하기 1을 하는 함수입니다.', () => {
        const num = 30;

        // expect: 기대식.실행할 함수의 결과값을 인자로 전달합니다.
        // toBe 함수: matcher function,내가 기대한 결과가 일치하는지 판단하는 함수 
        expect(plusOne(num)).toBe(num+1);
    }) 
} 
)