const fs = require('fs');

function loadTemplates() {
    return {
        footer: fs.readFileSync('./src/templates/footer.html', { encoding: 'utf-8' }),
        startSection: fs.readFileSync('./src/templates/startSection.html', { encoding: 'utf-8' }),
        header: fs.readFileSync('./src/templates/header.html', { encoding: 'utf-8' }),
        mobileNav: fs.readFileSync('./src/templates/mobileNav.html', { encoding: 'utf-8' }),
        middleSection: fs.readFileSync('./src/templates/middleSection.html', { encoding: 'utf-8' }),
        officeSection: fs.readFileSync('./src/templates/officeSection.html', { encoding: 'utf-8' }),
        testimonials: fs.readFileSync('./src/templates/testimonials.html', { encoding: 'utf-8' }),
    };
}

module.exports = {
    loadTemplates,
}