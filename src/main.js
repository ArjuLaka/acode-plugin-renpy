import './renpy_highlight_rules';
import renpyIcon from './renpy.svg';
import plugin from '../plugin.json';
import snippetText from './renpy_snippets'

const fs = acode.require('fs');
const Url = acode.require('url');
const snippetManager = ace.require('ace/snippets').snippetManager;
const { addMode, removeMode } = acode.require('aceModes');

class AcodePlugin {
  #style;
  
  async init(firstTime) {
    this.#style = <style
      textContent={
        `.file_type_renpy::before{
          display: inline-block;
          content: '';
          background-image: url(${renpyIcon});
          background-size: contain;
          background-repeat: no-repeat;
          height: 1em;
          width: 1em;
        }
        .ace_renpyAnimation{
          color: #ebe128;
        }
        `
      }
    ></style>
    const { editor } = editorManager;
    editor.setOption('enableBasicAutocompletion', true);
    editor.setOption('enableLiveAutocompletion', true);

    addMode('renpy', ['rpy', 'rpym'], "Ren'Py");
    document.head.append(this.#style);
    snippetManager.register(snippetText)
    if (!firstTime) return;

    editorManager.files.forEach(file => {
      // update session mode
      if (Url.extname(file.name) === '.rpy' || '.rpym') {
        file.session.setMode('ace/mode/renpy');
      }
    });
  }
  
  async destroy() {
    this.#style.remove();
    removeMode('renpy');

    editorManager.files.forEach(file => {
      // update session mode
      if (Url.extname(file.name) === '.rpy' || '.rpym') {
        file.session.setMode('ace/mode/text');
      }
    });
  }
}

if (window.acode) {
  const acodePlugin = new AcodePlugin();
  acode.setPluginInit(plugin.id, (baseUrl, $page, options) => {
    acodePlugin.init(options.firstInit);
  });
  acode.setPluginUnmount(plugin.id, () => {
    acodePlugin.destroy();
  });
}