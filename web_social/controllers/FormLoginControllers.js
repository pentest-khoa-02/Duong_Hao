const show = (req, res) => {
    res.render("form-login", {layout: false});
}

export default { show };