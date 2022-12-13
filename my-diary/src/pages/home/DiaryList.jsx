import React from 'react'
import styles from './Home.module.css'

export default function DiaryList({ diaries }) {
    return (
        <>
            {/* jsx를 바로 반영하기 위해 map을 사용하겠습니다. map은 새로운 배열을 반환하는 순환문입니다.
            https://ko.reactjs.org/docs/lists-and-keys.html#embedding-map-in-jsx
            */}
            {/* jsx 리스트에는 key 프로퍼티가 있어야합니다. Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다. key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.  https://ko.reactjs.org/docs/lists-and-keys.html */}

            {diaries.map((item) => {
                return (

                    <li key={item.id}>
                        <strong className={styles.title}>{item.title}</strong>
                        <p className={styles.text}>{item.text}</p>
                    </li>
                )
            })}
        </>
    )
}
