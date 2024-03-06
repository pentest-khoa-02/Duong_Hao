const feedRouter = require('./feed');
const messagesRouter = require('./messages');
const videoRouter = require('./video');
const eventRouter = require('./event');
const pagesRouter = require('./pages');
const groupsRouter = require('./groups');
const marketRouter = require('./market');
const blogRouter = require('./blog');
const timelineRouter = require('./timeline');
const settingRouter = require('./setting');

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

module.exports = route;