;(function(window, document, undefined){

    var regex = /{{(\w+)}}/g;

    function define(template, data, to){
        var frag = document.createDocumentFragment(),
            el = template.children[0].cloneNode(true);

        to = document.querySelector(to);

        el.innerHTML = el.innerHTML.replace(regex, function(){
            return data[arguments[1]];
        });

        to.appendChild( frag.appendChild(el) );
    }

})(window, document);
