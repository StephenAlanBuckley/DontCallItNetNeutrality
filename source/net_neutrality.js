walk(document.body);

function walk(node) 
{
    // I stole this function from here:
    // http://is.gd/mwZp7E
    
    var child, next;

    switch ( node.nodeType )  
    {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while ( child ) 
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) 
{
    var value = textNode.nodeValue;

    var pattern = new RegExp("Protect([\\S]*) Net Neutrality", "gi");
    var new_value = value.replace(pattern, "Prevent$1 Cable Company Fuckery");

    textNode.nodeValue = new_value;
}
