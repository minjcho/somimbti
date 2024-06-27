window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const resultType = urlParams.get('result');
    const lastSelected = urlParams.get('selected');

    const resultNameElement = document.querySelector('.resultname');
    const resultDescElement = document.querySelector('.resultDesc');
    const resultImgContainer = document.querySelector('#resultImg');

    if (resultNameElement && lastSelected) {
        resultNameElement.innerHTML = lastSelected;
    }

    let imageUrl = '';
    if (resultImgContainer && lastSelected) {
        const resultImage = document.createElement('img');
        imageUrl = `../image/results/${lastSelected}.png`;
        resultImage.src = imageUrl;
        resultImage.alt = lastSelected;
        resultImage.className = 'img-fluid';
        resultImage.style.maxWidth = '60%';
        resultImage.style.maxWidth = '600px';
        resultImage.style.height = 'auto';
        resultImage.style.display = 'block';
        resultImage.style.margin = '0 auto';
        resultImgContainer.appendChild(resultImage);
    }

    const selectedMajorInfo = infoList.find(majorInfo => majorInfo.major === lastSelected);

    if (selectedMajorInfo && resultDescElement) {
        const resultContainer = document.createElement('div');
        resultContainer.className = 'result-container';

        const descHeading = document.createElement('h2');
        descHeading.innerText = `${selectedMajorInfo.major}는요`;
        descHeading.style.marginTop = '30px';
        descHeading.style.whiteSpace = "nowrap";
        descHeading.style.display = "block";
        descHeading.style.width = "100%";
        descHeading.style.overflow = "hidden";
        descHeading.style.fontFamily = 'Maplestory Light';
        descHeading.style.fontWeight = 'bold';
        descHeading.style.fontSize = '4em';

        resultContainer.appendChild(descHeading);

        const descParagraph = document.createElement('p');
        descParagraph.style.marginTop = '30px';
        descParagraph.innerText = selectedMajorInfo.desc;
        descParagraph.style.fontFamily = 'Maplestory Light';
        resultContainer.appendChild(descParagraph);

        const learningHeading = document.createElement('h2');
        learningHeading.style.marginTop = '50px';
        learningHeading.style.marginBottom = '30px';
        learningHeading.innerText = '이런 학과도 어울려요!';
        learningHeading.style.whiteSpace = "nowrap";
        learningHeading.style.display = "block";
        learningHeading.style.width = "100%";
        learningHeading.style.overflow = "hidden";
        learningHeading.style.fontFamily = 'Maplestory Light';
        learningHeading.style.fontWeight = 'bold';
        learningHeading.style.fontSize = '4.5em';

        resultContainer.appendChild(learningHeading);

        const learningList = document.createElement('ul');
        learningList.style.listStyle = 'none';

        selectedMajorInfo.learning.forEach(subject => {
            const listItem = document.createElement('li');
            listItem.style.display = 'flex';
            listItem.style.flexWrap = 'wrap';
            listItem.style.fontFamily = 'Maplestory Light';

            const nameElement = document.createElement('strong');
            nameElement.style.flex = '0 0 auto';
            nameElement.style.marginRight = '5px';
            nameElement.innerText = `${subject.name}:`;
            nameElement.style.fontFamily = 'Maplestory Light';

            const descElement = document.createElement('span');
            descElement.style.flex = '1 1 auto';
            descElement.innerText = subject.desc;
            descElement.style.fontFamily = 'Maplestory Light';
            descElement.style.marginBottom = '15px';

            listItem.appendChild(nameElement);
            listItem.appendChild(descElement);
            learningList.appendChild(listItem);
        });

        resultContainer.appendChild(learningList);
        resultDescElement.appendChild(resultContainer);
    }

    if (resultDescElement) {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        const retryButton = document.createElement('button');
        retryButton.innerHTML = '다시하기';
        retryButton.className = 'btn retry-button';
        retryButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
        buttonContainer.appendChild(retryButton);

        if (imageUrl) {
            const downloadButton = document.createElement('a');
            downloadButton.href = `800w/${lastSelected}.png`;
            downloadButton.download = `소미화방_${lastSelected}`;
            downloadButton.className = 'btn download-button';
            downloadButton.innerHTML = '결과 다운로드';
            buttonContainer.appendChild(downloadButton);
        }

        resultDescElement.appendChild(buttonContainer);
    }

    window.addEventListener('resize', () => {
        resultForm.height = window.innerHeight * 0.8 + 'px';
    });

    // Share Button Event Handler
    const shareButton = document.getElementById('shareButton');
    shareButton.addEventListener('click', function() {
        const url = "https://www.somihwabang.kr";
        navigator.clipboard.writeText(url).then(() => {
            alert('링크가 복사 되었어요!');
        }).catch((error) => {
            console.error('링크 복사에 실패했습니다:', error);
        });
    });

    shareButton.addEventListener('mouseover', function() {
        document.getElementById('shareImage').src = './image/test_share_hover.png';
    });

    shareButton.addEventListener('mouseout', function() {
        document.getElementById('shareImage').src = './image/test_share.png';
    });
});