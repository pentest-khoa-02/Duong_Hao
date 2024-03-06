import feedRouter from './feed.js';
import messagesRouter from './messages.js';
import videoRouter from './video.js';
import eventRouter from './event.js';
import pagesRouter from './pages.js';
import groupsRouter from './groups.js';
import marketRouter from './market.js';
import blogRouter from './blog.js';
import timelineRouter from './timeline.js';
import settingRouter from './setting.js';

function route(app){
    app.use('/messages', messagesRouter);
    app.use('/video', videoRouter);
    app.use('/feed', feedRouter);
    app.use('/event', eventRouter);
    app.use('/pages', pagesRouter);
    app.use('/groups', groupsRouter);
    app.use('/market', marketRouter);
    app.use('/blog', blogRouter);
    app.use('/timeline', timelineRouter);
    app.use('/setting', settingRouter);
}

export default route;