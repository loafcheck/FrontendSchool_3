// describe 함수 : 테스트할 유닛들의 모음
describe("클릭이벤트 및 뷰를 담당하는 클래스입니다.", () => {
     // it 함수 : 함수의 테스트 유닛입니다. 첫번째 인자로 함수의 설명, 두 번째 인자로 테스트할 함수를 전달합니다.
    it("viewManager의 인자로 textManager의 인스턴스가 전달되는지 확인합니다.", () => {
      const textManager = null;
      const btnEl = document.createElement("button");
      const viewerEl = document.createElement("h2");
      const inpTxt = document.createElement("input");
  
      const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
    // expect : 기대식.. 실행할 함수의 결과값을 인자로 전달합니다.
    // toBe 함수 : 매치 함수입니다. 내가 기대한 결과가 일치하는지 판단하는 함수
      expect(actual).toThrowError();
    });
  
    it("viewManager의 인자로 HTML요소들이 잘 전달되는지 확인합니다.", () => {
      const textManager = new TextManager();
      const btnEl = null;
      const viewerEl = null;
      const inpTxt = null;
  
      const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
  
      expect(actual).toThrowError();
    });
  
    const textManager = new TextManager(),
      btnEl = document.createElement("bututon"),
      viewerEl = document.createElement("h2"),
      inpTxt = document.createElement("input"),
      viewManager = new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
  
    it("click 이벤트가 발생했을 경우 changeValue 함수가 실행되는지 확인합니다.", () => {
      // spyOn : 특정 객체의 메서드를 감시합니다.
      spyOn(viewManager, "changeValue");
      btnEl.click();
    // toHaveBeenCalled :함수가 과거에 호출된 적이 있는지 확인한다.
      expect(viewManager.changeValue).toHaveBeenCalled();
    });
  
    it("changeValue 함수를 통해 updateView 함수가 호출되는지 확인합니다.", () => {
      spyOn(viewManager, "updateView");
      viewManager.changeValue();
  
      expect(viewManager.updateView).toHaveBeenCalled();
    });
  });

/**
 * it은unittest를 하는 확인하는 함수입니다. 
 * viewManager 함수를 작성할때 예외처리를 하고 있기 때문에 예외처리가 잘 되는지 확인할 필요가 있다. 
 * toThrowError 함수를 통해 에러탐지하기
 * 결과값을 actual에 넣고 
 * 그것을 expect에 넣고
 * 
 * options가 제대로 들어오는지 확인하기위해 
 * textManager에 null 에서 제대로 기입했다. 인스턴스 정상작동
 * 그리고 나머지를 일부로 실패를 시킨다. 
 * actual을 통해 결과값 넣고 
 * 그것을 expect에 넣는다. 
 * 
 * 
 * 자바, c 기계어로 변환시켜주는 작업 그것을 컴파일러
 * 자바스크립트를 사용시:
 * 브라우저가 컴파일링을 하고 있다. -> 코드가 잘 되고 있는지 알수 있는 길이 없다 . -> === 이렇게 쓰는 이유도 컴파일러가 없기 때문에 
 * 
 */