import {useState} from "react";

const TestPostList = () => {
        const [postLis, setPostLis] = useState([
            {
                user: {
                    picture: "https://yobte.ru/uploads/posts/2019-11/kosmos-76-foto-50.jpg",
                    name: "Рябичев Максим Максимович"
                },
                timestamp: "Сегодня в 23:15",
                post: {
                    header: "Тема предложения: бла бла бла БЛА БЛА бла бла #блабла #бла",
                    picture: "https://i.stack.imgur.com/SvWWN.png",
                }
            },

            {
                user: {
                    picture: "http://static.tildacdn.com/tild6238-3764-4838-b361-623263303461/David-Gandy-Marks-an.jpg",
                    name: "Пупкин Василий Васильевич"
                },
                timestamp: "3 февраля в 9:45",
                post: {
                    header: "Тема предложения: бла бла бла БЛА БЛА бла бла #блабла #бла",
                    picture: "http://admiral-stroi.ru/images/2020/02/05/interer-ofisa-v-stile-minimalizm.jpg"
                }
            },

            {
                user: {
                    picture: "",
                    name: "Пупкин Василий Васильевич"
                },
                timestamp: "2 февраля в 9:45",
                post: {
                    header: "Тема предложения: бла бла бла БЛА БЛА бла бла #блабла #бла",
                    picture: "https://kartinki.pics/uploads/posts/2022-03/1647988933_1-kartinkin-net-p-panoramnie-kartinki-1.jpg"
                }
            },

            {
                user: {
                    picture: "",
                    name: "Пупкин Василий Васильевич"
                },
                timestamp: "1 февраля в 9:45",
                post: {
                    header: "Тема предложения: бла бла бла БЛА БЛА бла бла #блабла #бла",
                    picture: "https://proprikol.ru/wp-content/uploads/2020/08/kartinki-lamborgini-lamborghini-49.jpg"
                }
            },

            {
                user: {
                    picture: "",
                    name: "Пупкин Василий Васильевич"
                },
                timestamp: "3 сентября в 11:35",
                post: {
                    header: "Тема предложения: бла бла бла БЛА БЛА бла бла #блабла #бла",
                    picture: ""
                }
            },
        ])

    return {postLis, setPostLis}
};

export default TestPostList;
