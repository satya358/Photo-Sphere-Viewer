const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

const viewer = new Viewer({
    container: 'viewer',
    adapter: [EquirectangularVideoAdapter, {
        muted: true,
    }],
    caption: 'Ayutthaya <b>&copy; meetle</b>',
    loadingImg: baseUrl + 'loader.gif',
    touchmoveTwoFingers: true,
    mousewheelCtrlKey: true,
    navbar: 'video autorotate caption settings fullscreen',

    plugins: [
        [VideoPlugin, {
            keypoints: [
                { time: 0, position: { yaw: 0, pitch: 0 } },
                { time: 5, position: { yaw: -Math.PI / 4, pitch: Math.PI / 8 } },
                { time: 10, position: { yaw: -Math.PI / 2, pitch: 0 } },
                { time: 15, position: { yaw: (-3 * Math.PI) / 4, pitch: -Math.PI / 8 } },
                { time: 20, position: { yaw: -Math.PI, pitch: 0 } },
                { time: 25, position: { yaw: (-5 * Math.PI) / 4, pitch: Math.PI / 8 } },
                { time: 30, position: { yaw: (-3 * Math.PI) / 2, pitch: 0 } },
                { time: 35, position: { yaw: (-7 * Math.PI) / 4, pitch: -Math.PI / 8 } },
            ],
        }],
        AutorotatePlugin,
        SettingsPlugin,
        [ResolutionPlugin, {
            defaultResolution: 'HD',
            resolutions: [
                {
                    id: 'UHD',
                    label: 'Ultra high',
                    panorama: { source: baseUrl + 'equirectangular-video/Ayutthaya_UHD.mp4' },
                },
                {
                    id: 'FHD',
                    label: 'High',
                    panorama: { source: baseUrl + 'equirectangular-video/Ayutthaya_FHD.mp4' },
                },
                {
                    id: 'HD',
                    label: 'Standard',
                    panorama: { source: baseUrl + 'equirectangular-video/Ayutthaya_HD.mp4' },
                },
                {
                    id: 'SD',
                    label: 'Low',
                    panorama: { source: baseUrl + 'equirectangular-video/Ayutthaya_SD.mp4' },
                },
            ],
        }],
    ],
});