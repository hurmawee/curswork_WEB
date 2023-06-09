class Graph{
    constructor() {
        this.vertices = {};// список смежности
    }
    addVertex(value){
        if(!this.vertices[value])
        {
            this.vertices[value] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        if(!(vertex1 in this.vertices) || !(vertex2 in this.vertices))
        {
            throw new Error("В графе нет такого узла");
        }
        if (!this.vertices[vertex1].includes(vertex2)) {
            this.vertices[vertex1].push(vertex2);
        }
        if (!this.vertices[vertex2].includes(vertex1)) {
            this.vertices[vertex2].push(vertex1);
        }
    }
    bfs(startVertex) {
        let list = this.vertices;
        let queue = [startVertex];
        let visited = { [startVertex]: 1 };

        // кратчайшее расстояние от стартовой вершины
        let distance = { [startVertex]: 0 };
        // предыдущая вершина в цепочке
        let previous = { [startVertex]: null };

        function handleVertex(vertex) {
            let neighboursList = list[vertex];
            neighboursList.forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = 1;
                    queue.push(neighbour);
                    // сохраняем предыдущую вершину
                    previous[neighbour] = vertex;
                    // сохраняем расстояние
                    distance[neighbour] = distance[vertex] + 1;
                }
            });
        }
        // перебираем вершины из очереди, пока она не опустеет
        while(queue.length) {
            let activeVertex = queue.shift();
            handleVertex(activeVertex);
        }
        return { distance, previous }
    }
    findShortestPath(startVertex, finishVertex) {
        let result = this.bfs(startVertex);

        if (!(finishVertex in result.previous))
            throw new Error(`Нет пути из вершины ${startVertex} в вершину ${finishVertex}`);

        let path = [];

        let currentVertex = finishVertex;

        while(currentVertex !== startVertex) {
            path.unshift(currentVertex);
            currentVertex = result.previous[currentVertex];
        }

        path.unshift(startVertex);

        return path;
    }
    isVertex(vertex){
        if(!(vertex in this.vertices))
            return 0
        else
            return 1
    }
}

//создание графа
const graph = new Graph();

//описание узлов

//0-этаж
graph.addVertex('008')
graph.addVertex('009')
graph.addVertex('010')
graph.addVertex('029')
graph.addVertex('020-027')
graph.addVertex('BIB')
//промежуточные
graph.addVertex('0A')
graph.addVertex('0B')
graph.addVertex('0C')
graph.addVertex('0D')
//лестницы
graph.addVertex('0LN')//2-лестница
graph.addVertex('0LS')//3-лестница
graph.addVertex('0LWM')//4-лестница

//1-этаж
graph.addVertex('101')
graph.addVertex('103')
graph.addVertex('107')
graph.addVertex('128')
graph.addVertex('111')
graph.addVertex('116')
graph.addVertex('117')
graph.addVertex('120')
graph.addVertex('121')
graph.addVertex('122')
graph.addVertex('126')
graph.addVertex('127')
//промежуточные
graph.addVertex('1A')
graph.addVertex('1B')
graph.addVertex('1C')

//лестницы
graph.addVertex('1LM')//1-лестница
graph.addVertex('1LMM')//1-лестница
graph.addVertex('1LN')//2-лестница
graph.addVertex('1LS')//3-лестница
graph.addVertex('1LW')//4-лестница
graph.addVertex('1LWM')//4-лестница

//2-этаж
graph.addVertex('201')
graph.addVertex('202')
graph.addVertex('203')
graph.addVertex('204')
graph.addVertex('211')
graph.addVertex('213-214')
graph.addVertex('209')
graph.addVertex('210')
graph.addVertex('221')
graph.addVertex('224')
graph.addVertex('225')
graph.addVertex('226')
graph.addVertex('227')
graph.addVertex('228')
graph.addVertex('229')
graph.addVertex('239')
graph.addVertex('238')
graph.addVertex('234')
graph.addVertex('237')
graph.addVertex('2TM')
graph.addVertex('2TW')
graph.addVertex('DIR')
//промежуточные
graph.addVertex('2A')
graph.addVertex('2B')
graph.addVertex('2C')
//лестницы
graph.addVertex('2LM')//1-лестница
graph.addVertex('2LN')//2-лестница
graph.addVertex('2LS')//3-лестница
graph.addVertex('2LW')//4-лестница

//3-этаж
graph.addVertex('301')
graph.addVertex('302')
graph.addVertex('303')
graph.addVertex('304')
graph.addVertex('305')
graph.addVertex('307')
graph.addVertex('310')
graph.addVertex('311')
graph.addVertex('312')
graph.addVertex('308')
graph.addVertex('309')
graph.addVertex('331')
graph.addVertex('332')
graph.addVertex('326')
graph.addVertex('325')
graph.addVertex('328')
graph.addVertex('323')
graph.addVertex('3TW')
graph.addVertex('3TM')
//промежуточные
graph.addVertex('3A')
graph.addVertex('3C')
graph.addVertex('3D')

graph.addVertex('3LM')//1-лестница
graph.addVertex('3LN')//2-лестница
graph.addVertex('3LS')//3-лестница
graph.addVertex('3LW')//4-лестница

//описание ребер
//0 этаж
graph.addEdge('029', '0A');
graph.addEdge('0A', '0B');
graph.addEdge('0B', '010');
graph.addEdge('0B', '0D');
graph.addEdge('0D', '0LWM');
graph.addEdge('0B', '0C');
graph.addEdge('0C', '0LN');
graph.addEdge('0C', '0LS');
graph.addEdge('010', '009');
graph.addEdge('0LN', 'BIB');
graph.addEdge('0LS', '008');
graph.addEdge('008', '020-027');

//1 этаж
graph.addEdge('128', '1A');
graph.addEdge('1A', '1B');
graph.addEdge('1B', '111');
graph.addEdge('1B', '1LWM');
graph.addEdge('1LWM', '107');
graph.addEdge('107', '1LW');
graph.addEdge('1LN', '103');
graph.addEdge('103', '101');
graph.addEdge('103', '1C');
graph.addEdge('1C', '1LM');
graph.addEdge('1C', '1LMM');
graph.addEdge('1LS', '126');
graph.addEdge('126', '127');
graph.addEdge('1LS', '122');
graph.addEdge('122', '121');
graph.addEdge('121', '120');
graph.addEdge('120', '116');
graph.addEdge('116', '117');

//2 этаж
graph.addEdge('225', '224');
graph.addEdge('224', '226');
graph.addEdge('226', '227');
graph.addEdge('227', '239');
graph.addEdge('239', '228');
graph.addEdge('238', '228');
graph.addEdge('238', '229');
graph.addEdge('229', '2TM');
graph.addEdge('2TM', '2A');
graph.addEdge('2A', '2B');
graph.addEdge('2B', '2LW');
graph.addEdge('2LW', '234');
graph.addEdge('234', '237');
graph.addEdge('237', '2LN');
graph.addEdge('2LN', '203');
graph.addEdge('203', '201');
graph.addEdge('201', '202');
graph.addEdge('202', '204');
graph.addEdge('204', '2LM');
graph.addEdge('2LM', 'DIR');
graph.addEdge('DIR', '211');
graph.addEdge('211', '209');
graph.addEdge('213-214', '209');
graph.addEdge('213-214', '210');
graph.addEdge('210', '2C');
graph.addEdge('2C', '210');
graph.addEdge('2TW', '2LS');
graph.addEdge('2LS', '221');

//3 этаж
graph.addEdge('303', '304');
graph.addEdge('304', '302');
graph.addEdge('302', '305');
graph.addEdge('305', '301');
graph.addEdge('301', '3LM');
graph.addEdge('3LM', '307');
graph.addEdge('307', '310');
graph.addEdge('310', '311');
graph.addEdge('311', '308');
graph.addEdge('308', '312');
graph.addEdge('312', '309');
graph.addEdge('309', '3C');
graph.addEdge('3C', '3TM');
graph.addEdge('3TM', '3LS');
graph.addEdge('332', '3D');
graph.addEdge('3D', '331');
graph.addEdge('331', '3LW');
graph.addEdge('3LW', '3A');
graph.addEdge('3A', '3TW');
graph.addEdge('3TW', '326');
graph.addEdge('326', '323');
graph.addEdge('323', '325');
graph.addEdge('325', '328');

//связь этажей
graph.addEdge('3LW', '2LW');
graph.addEdge('2LW', '1LW');
graph.addEdge('1LWM', '0LWM');

graph.addEdge('3LN', '2LN');
graph.addEdge('2LN', '1LN');
graph.addEdge('1LN', '0LN');

graph.addEdge('3LS', '2LS');
graph.addEdge('2LS', '1LS');
graph.addEdge('1LS', '0LS');

graph.addEdge('3LM', '2LM');
graph.addEdge('2LM', '1LM');


const btn = document.querySelector('.btn_js');
let road = []
let last1 = document.getElementById('au201');
let last2 = document.getElementById('au202')

btn.addEventListener('click', function (){
    let inpFrom = document.getElementById('inputFrom_js').value;
    let inpTo = document.getElementById('inputTo_js').value;
    //проверка на одинаковые аудитории
    if(inpFrom===inpTo)
    {
        return
    }
    //проверка на наличие такой аудитории
    if(!graph.isVertex(inpTo) || !graph.isVertex(inpFrom))
    {
        return
    }
    //очищение прошлого пути
    last1.style.scale =1;
    last2.style.scale =1;
    for(let i=1;i<road.length;i++)
    {
        console.log('R'+ road[i]+'_'+road[i-1])
        if((Math.abs(road[i][0]-road[i-1][0]))!==1) {
            document.querySelector('.R' + road[i] + '_' + road[i - 1]).classList.add("hidden")
        }
    }
    ///чтение ввода пользователя
    if(/^\d+$/.test(inpFrom[1]) || inpFrom==="DIR" || inpFrom==="BIB"){//просмотр на ввод аудитории
        if(graph.isVertex(inpFrom))//проверка на существования
            last1 = document.getElementById('au'+inpFrom);
        else {
            return
        }
    }
    else if(inpFrom[1]==='L') {//просмотр на лестницу
        last1 = document.getElementById('lad'+inpFrom);
    }
    else if(inpFrom[1]==='T') {//просмотр на туалет
        last1 = document.getElementById('toi'+inpFrom);
    }
    else {
        return
    }
    if(/^\d+$/.test(inpTo[1]) || inpTo==="BIB" || inpTo==="DIR") {//просмотр на ввод аудитории
        last2 = document.getElementById('au'+inpTo);
    }
    else if(inpTo[1]==='L') {//просмотр на лестницу
        last2 = document.getElementById('lad'+inpTo);
    }
    else if(inpTo[1]==='T') {//просмотр на туалет
        last2 = document.getElementById('toi'+inpTo);
    }
    else {
        return
    }


    last1.style.scale =1.05;
    last2.style.scale =1.05;

    road = graph.findShortestPath(inpFrom,inpTo);
    for(let i=1;i<road.length;i++)
    {
        if((Math.abs(road[i][0]-road[i-1][0]))!==1) {
            document.querySelector('.R' + road[i] + '_' + road[i - 1]).classList.remove("hidden")
        }
    }
})

