
var inp_txt_area_id = 'input_txt';
var ns_txt_id = 'ns_txt';

var output_p_id = 'modified_val_p';

function getTextAreaValue(txt_area_id) {
    var txt_area = document.getElementById(inp_txt_area_id);
    return txt_area.value;
}

function getTextValue(txt_id) {
    var txt = document.getElementById(txt_id);
    return txt.value;
}

function modify() {
    var inputTxt = getTextAreaValue(inp_txt_area_id);
    var nsTxt = getTextValue(ns_txt_id);
    
    var modifiedTxt = modifyTxt(inputTxt, nsTxt);
    var outputP = document.getElementById(output_p_id);
    outputP.innerHTML = modifiedTxt;
}

function modifyTxt(txt_to_modify, targetNs) {
    var modifiedTxt = 'This is a modified text.';
    if (!txt_to_modify || txt_to_modify.length == 0) {
        return modifiedTxt;
    }
    if (!targetNs || targetNs.length == 0) {
        return modifiedTxt;
    }
    return modifiedTxt;
}
