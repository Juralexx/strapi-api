export const editorConfig = {
    plugin: {
        // disable data-theme tag setting // 
        // setAttribute:false,
        // disable strapi theme, will use default ckeditor theme //
        // strapiTheme:false,
    },
    editor: {
        // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
        // if you need markdown support and output set: removePlugins: [''],
        // default is 
        // removePlugins: ['Markdown'],
        // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
        toolbar: {
            items: [
                'sourceEditing',
                'paragraph',
                'heading2',
                'heading3',
                '|',
                'bold',
                'italic',
                'fontColor',
                'fontBackgroundColor',
                'fontFamily',
                'underline',
                'fontSize',
                'removeFormat',
                '|',
                'bulletedList',
                'todoList',
                'numberedList',
                '|',
                'alignment',
                'outdent',
                'indent',
                'horizontalLine',
                '|',
                'StrapiMediaLib',
                'insertTable',
                'blockQuote',
                'mediaEmbed',
                'link',
                'highlight',
                // '|',
                'htmlEmbed',
                // 'code',
                // 'codeBlock',
                // '|',
                // 'subscript',
                // 'superscript',
                'strikethrough',
                'specialCharacters',
                '|',
                'heading',
                "fullScreen",
                'undo',
                'redo'
            ]
        },
        mediaEmbed: {
            previewsInData: true
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/font.html
        fontSize: {
            options: [9, 11, 13, 'default', 17, 19, 21, 27, 35],
            supportAllValues: false
        },
        fontFamily: {
            options: [
                'default',
                'Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif',
                'Lucida Sans Unicode, Lucida Grande, sans-serif',
                'Tahoma, Geneva, sans-serif',
                'Trebuchet MS, Helvetica, sans-serif',
                'Verdana, Geneva, sans-serif',
                'Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif',
                // 'Courier New, Courier, monospace',
                // 'Georgia, serif',
                // 'Times New Roman, Times, serif',
            ],
            supportAllValues: true
        },
        fontColor: {
            columns: 5,
            documentColors: 10,
        },
        fontBackgroundColor: {
            columns: 5,
            documentColors: 10,
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
        // default language: 'en',
        // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
        image: {
            resizeUnit: "%",
            resizeOptions: [{
                name: 'resizeImage:original',
                value: null,
                icon: 'original'
            },
            {
                name: 'resizeImage:25',
                value: '25',
                icon: 'small'
            },
            {
                name: 'resizeImage:50',
                value: '50',
                icon: 'medium'
            },
            {
                name: 'resizeImage:75',
                value: '75',
                icon: 'large'
            }],
            toolbar: [
                'toggleImageCaption',
                'imageTextAlternative',
                'imageStyle:inline',
                'imageStyle:block',
                'imageStyle:side',
                'linkImage',
                'resizeImage:25',
                'resizeImage:50',
                'resizeImage:75',
                'resizeImage:original'
            ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells',
                'tableCellProperties',
                'tableProperties',
                'toggleTableCaption'
            ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Titre 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Titre 2', class: 'ck-heading_heading2' },
                { model: 'heading3', view: 'h3', title: 'Titre 3', class: 'ck-heading_heading3' },
                { model: 'heading4', view: 'h4', title: 'Titre 4', class: 'ck-heading_heading4' },
            ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html
        // Regular expressions (/.*/  /^(p|h[2-4])$/' etc) for htmlSupport does not allowed in this config
        htmlSupport: {
            allow: [
                {
                    name: 'img',
                    attributes: {
                        sizes: true,
                        loading: true,
                    }
                },
            ]
        },
    }
}