import React from 'react';
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'


const myTheme = {
    // Theme object to extends default dark theme.
};

const Editor = (props) => {
    return (
        <ImageEditor
            includeUI={{
                loadImage: {
                    path: props.image,
                    name: 'SampleImage'
                },
                theme: myTheme,
                menu: ['shape', 'filter'],
                initMenu: 'filter',
                uiSize: {
                    width: '100%',
                    height: '700px'
                },
                menuBarPosition: 'bottom'
            }}
            cssMaxHeight={500}
            cssMaxWidth={700}
            selectionStyle={{
                cornerSize: 20,
                rotatingPointOffset: 70
            }}
            usageStatistics={true}
        />
    );
    
}

export default Editor;