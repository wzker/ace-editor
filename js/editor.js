var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
editor.commands.addCommand({

    bindKey: { win: '' },
    exec: function(editor) {
        editor.insert("");
        var selection = editor.getSelection();
        selection.moveCursorBy(0, 0);
    },
    readOnly: false // false if this command should not apply in readOnly mode
});
