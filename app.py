from flask import Flask, render_template, url_for, redirect, request

app = Flask(__name__)

# Route untuk halaman Home
@app.route('/')
def home():
    return render_template('home.html')

# Route untuk halaman Tentang Batik
@app.route('/tentangbatik')
def tentangbatik():
    return render_template('tentangbatik.html')

# Route untuk halaman Deteksi Batik
@app.route('/deteksi', methods=['GET', 'POST'])
def deteksi():
    if request.method == 'POST':
        # Handle uploaded image
        file = request.files['batik_image']
        if file:
            # Save the uploaded file
            file_path = f"static/uploads/{file.filename}"
            file.save(file_path)
            return f"Gambar {file.filename} berhasil diunggah dan akan dideteksi."
        return "Gagal mengunggah gambar."
    return render_template('deteksi.html')

# Route untuk halaman Mapping
@app.route('/maping')
def maping():
    return render_template('maping.html')

@app.route('/event')
def event():
    return render_template('event.html')


if __name__ == '__main__':
    app.run(debug=True)
