const show = (req, res) => {
    res.render("form-register", {layout: false});
}

export default { show };