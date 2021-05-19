/* Принцип єдиної відповідальності (Single Responsibility Principle) SRP */

class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }
    toHTML() {
        return `
            <div class="news">
                <h1>${this.title}</h1>
                <p>${this.text}</p>
            </div>
        `
    }
    toJSON() {
        return JSON.stringify({
          title: this.title,
          text: this.text,
          modified: this.modified
        })
    }
}

const news  = new News ('JavaScript', 'Краща мова програмування');

console.log(news);
console.log(news.toHTML());
console.log(news.toJSON());
