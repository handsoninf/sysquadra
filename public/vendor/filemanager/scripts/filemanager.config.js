{
    "options": {
        "culture": "pt",
        "lang": "php",
        "theme": "default",
        "defaultViewMode": "grid",
        "autoload": true,
        "showFullPath": false,
        "showTitleAttr": false,
        "browseOnly": false,
        "showConfirmation": true,
        "showThumbs": true,
        "generateThumbnails": true,
        "searchBox": true,
        "listFiles": true,
        "fileSorting": "default",
        "chars_only_latin": true,
        "dateFormat": "d M Y H:i",
        "serverRoot": true,
        "fileRoot": false,
        "relPath": false,
        "logger": false,
        "capabilities": ["select", "download", "rename", "delete", "replace"],
        "plugins": []
    },
    "security": {
        "allowFolderDownload": false,
        "allowChangeExtensions": false,
        "allowNoExtension": false,
        "uploadPolicy": "DISALLOW_ALL",
        "uploadRestrictions": [
            "jpg",
            "jpeg",
            "gif",
            "png",
            "svg",
            "txt",
            "pdf",
            "odp",
            "ods",
            "odt",
            "rtf",
            "doc",
            "docx",
            "xls",
            "xlsx",
            "ppt",
            "pptx",
            "csv",
            "ogv",
            "mp4",
            "webm",
            "m4v",
            "ogg",
            "mp3",
            "wav",
            "zip",
            "rar"
        ]
    },
    "upload": {
        "multiple": true,
        "number": 5,
        "overwrite": false,
        "imagesOnly": false,
        "fileSizeLimit": 16
    },
    "exclude": {
        "unallowed_files": [
            ".htaccess",
            "web.config"
        ],
        "unallowed_dirs": [
            "_thumbs",
            ".CDN_ACCESS_LOGS",
            "cloudservers"
        ],
        "unallowed_files_REGEXP": "/^\\./",
        "unallowed_dirs_REGEXP": "/^\\./"
    },
    "images": {
        "imagesExt": [
            "jpg",
            "jpeg",
            "gif",
            "png",
            "svg"
        ],
        "resize": {
        	"enabled":true,
        	"maxWidth": 1280,
            "maxHeight": 1024
        }
    },
    "videos": {
        "showVideoPlayer": true,
        "videosExt": [
            "ogv",
            "mp4",
            "webm",
            "m4v"
        ],
        "videosPlayerWidth": 400,
        "videosPlayerHeight": 222
    },
    "audios": {
        "showAudioPlayer": true,
        "audiosExt": [
            "ogg",
            "mp3",
            "wav"
        ]
    },
    "edit": {
        "enabled": false,
        "lineNumbers": true,
        "lineWrapping": true,
        "codeHighlight": false,
        "theme": "elegant",
        "editExt": [
            "txt",
            "csv"
        ]
    },
    "customScrollbar": {
    	"enabled": true,
    	"theme": "inset-2-dark",
    	"button": true
    },
    "extras": {
        "extra_js": [],
        "extra_js_async": true
    },
    "icons": {
        "path": "images/fileicons/",
        "directory": "_Open.png",
        "default": "default.png"
    },
    "url": "https://github.com/simogeo/Filemanager",
    "version": "2.0.0-dev"
}
