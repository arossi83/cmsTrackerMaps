class ParamEncoder { 
    static encodeOptions() {
        var ret = "?link=true";
        ret += this.encodeCheckboxes("checkboxAccordion");
        ret += this.encodeTextfield("refRunPath");
        ret += this.encodeTextfield("currRunPath");
        ret += this.encodeSelectedMap();
        return ret;
    }

    static encodeCheckboxes(name) {
        var ret = "";
        $('#' + name + ' :checkbox').each(function() {
            ret += "&";
            ret += $(this).prop('id');
            ret += "=";
            ret += $(this).prop('checked');
        });
        return ret;
    }

    static encodeTextfield(name) {
        var ret = "&" + name + "=";
        ret += $('#' + name).val();
        return ret;
    }

    static encodeSelectedMap() {
        var ret = "&mapSelect=";
        ret += $('.extandable-tab-list-ref .active > a').prop('id');
        return ret;
    }
}