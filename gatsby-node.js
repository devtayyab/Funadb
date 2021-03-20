exports.createPages = async function ({ actions}) {

    actions.createPage({
        path: "product",
        component: require.resolve(`./src/templates/product.js`),
        context: { 
            // Data passed to context is available
            // in pageContext props of the template component
            name: "Zia",
         },
    });
    console.log("End of Gatsby Node File");
}