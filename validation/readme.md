# Form Validation
폼에 작성된 데이터를 서버로 전송하기 전에 전송할 데이터들이 올바른 포맷으로 잘 입력되었는지 확인 하는 과정.

## Client Side Validation vs Server Side Validation
#### client side validation: 
사용자가 오류를 미리 인지 할 수 있다. 사용자의 편라함을 항상 고려해야한다. 
#### 예시) 
*  "This field is required" (You can't leave this field blank).
*  "Please enter your phone number in the format xxx-xxxx" (A specific data format is required for it to be considered valid).
*  "Please enter a valid email address" (the data you entered is not in the right format).
*  "Your password needs to be between 8 and 30 characters long and contain one uppercase letter, one symbol, and a number." (A very specific data format is required for your data).

#### Server side validation: 
입력된 데이터가 서버의 데이터베이스의 값과 일치하는 지 확인.
#### 예시) 
* ID/PW 확인(서버에서 데이터 조회해야할때)
* 회원가입할때, 중복아이디 체크

-----------------

## Client Side Validation -> Native Client-side form validation 
Native client side form validation is widely supported and easy to implement.


-------------------

### html css Javascript Validation