      elem = () => {
            let count = 105;
            if (screen.width < 800) {
                count = 10;
            }
            for (let i = 0; i < count; i++) {
                let iDiv = document.createElement('img');
                iDiv.id = i;
                if (i % 2 == 0) {
                    iDiv.className = "evenClass";
                } else {
                    iDiv.className = "oddClass";
                }
                if (i % 4 == 0) {
                    iDiv.className = "TDClass";
                }
                if (i % 7 == 0) {
                    iDiv.className = "CircClass";
                }
                iDiv.src = './avatar.jpg';
                document.getElementsByTagName('body')[0].appendChild(iDiv);
            };
        }
        elem();
