export function btnTop() {
    const btnTopDiv = `
        <div class="btnTopDiv">
            <style>
                .btnTopDiv {
                    position: fixed;
                    right: 10px;
                    bottom: 10px;
                }
                .btnTopDiv a {
                    background-color: #888;
                    color: #000;
                    border-radius: 5px;
                    height: 40px;
                    width: 40px;
                    align-content: center;
                    text-align: center;
                    display: block;
                    z-index: 998;
                    cursor: pointer;
                    text-decoration: none;
                    transition: background-color .2s ease-in-out;
                }
                .btnTopDiv a:hover {
                    background-color: #555;
                    transition: background-color .2s ease-in-out;
                }
            </style>
            <a href="#inicio">
                △
            </a>
        </div>
    `;
    document.body.innerHTML += btnTopDiv;
}