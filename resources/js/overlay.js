import Echo from "laravel-echo";
import LatestEvent from "@/OverlayExamples/LatestEvent";
import SteamHUD from "@/OverlayExamples/SteamHUD";

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    wsHost: process.env.MIX_PUSHER_APP_HOST ? process.env.MIX_PUSHER_APP_HOST : window.location.hostname,
    wsPort: window.APP_DEBUG ? 6001 : 6002,
    wssPort: window.APP_DEBUG ? 6001 : 6002,
    forceTLS: !window.APP_DEBUG,
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
});

const twitchUserId = document.body.getAttribute('data-twitch-user');

if (twitchUserId) {
    new LatestEvent(twitchUserId);
    new SteamHUD(twitchUserId);
}
