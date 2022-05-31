const editor = document.querySelector('.editor');

document.querySelectorAll('.options button').forEach((item) =>
  item.addEventListener('click', function () {
    const command = item.dataset.command;

    if (command.includes('style')) {
      const selectedTxt = window.getSelection();
      const parentEl = selectedTxt.anchorNode.parentElement;
      parentEl.style.textAlign = command.slice(6);
    } else {
      const createdEl = document.createElement(command);
      const selectedTxt = window.getSelection();

      if (
        command === 'h1' ||
        command === 'h2' ||
        command === 'h3' ||
        command === 'p'
      ) {
        console.log(selectedTxt);
        const parentEl = selectedTxt.anchorNode.parentElement;
        createdEl.textContent = parentEl.textContent;

        editor.replaceChild(createdEl, parentEl);
      } else {
        const selectedTxtRange = selectedTxt.getRangeAt(0);
        selectedTxtRange.surroundContents(createdEl);
      }
    }

    /*if (
      command === 'h1' ||
      command === 'h2' ||
      command === 'h3' ||
      command === 'p'
    ) {
      // 문서 편집 가능한 영역에 명령을 내릴 수 있다. (실행할 명령어 이름, 명령에 따른 기본 UI 제공할 것인지, 명령에 필요한 변수)
      document.execCommand('formatBlock', false, command);
    } else {
      document.execCommand(command);
    }*/
  })
);
