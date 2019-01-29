(function(){
    
    function buildList(container, data) {
        var link = item => `<a target="_blank   " href="${item.path}">${item.name}</a>`;
        
        var listItem = item => `<li>${link(item)}</li>`;
        
        var list = items => `<ul>
            ${ items.map(item => listItem(item)).join('') }
        </ul>`;
    
        document.getElementById(container).innerHTML = list(data);
    }
    
    buildList('flex_container', [
        {
            name: 'Flex Direction',
            path: './flex-container/01.flex-direction/index.html'
        },
        {
            name: 'Flex Wrap',
            path: './flex-container/02.flex-wrap/index.html'
        },
        {
            name: 'Justify Content',
            path: './flex-container/04.justify-content/index.html'
        },
        {
            name: 'Align Items',
            path: './flex-container/05.align-items/index.html'
        },
        {
            name: 'Align Content',
            path: './flex-container/06.align-content/index.html'
        }
    ]);

    buildList('flex_itens', [
        {
            name: 'Order',
            path: './flex-items/07.order/index.html'
        },
        {
            name: 'Align Self',
            path: './flex-items/08.align-self/index.html'
        },
        {
            name: 'Flex Grow',
            path: './flex-items/09.flex-grow/index.html'
        },
        {
            name: 'Flex Basis',
            path: './flex-items/11.flex-basis/index.html'
        },
    ]);

})()