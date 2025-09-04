//props를 배열 형식으로 넘겨 받기
function App({ type = "ul", menus }) {
    //  console.log('샘플');

    const ListTag = type === 'ul' ? 'ul' : 'ol';

    return (
        <nav>
            <ListTag>
                {menus.map((bread, index) => (
                    <li key={index}>
                        <a href={`${index + 1}.html`}>{bread}</a>
                    </li>
                ))}

            </ListTag>
        </nav>
    );
}

export default App;


// function App({ bread1, bread2, bread3, bread4 }) {
//     //  console.log('샘플');

//     return (
//         <nav>
//             <ul>
//                 <li><a href="1.html">{bread1}</a></li>
//                 <li><a href="2.html">{bread2}</a></li>
//                 <li><a href="3.html">{bread3}</a></li>
//                 <li><a href="4.html">{bread4}</a></li>
//             </ul>
//         </nav>
//     );
// }

// export default App;