export default function Footer() {
    return (
        <footer className="text-center py-2">
            <div className="container">
                <div >
                    <small >
                        <a href="mailto:alaasufi227@gmail.com" target="_blank">
                            <i className="fa fa-paper-plane" /> alaasufi227@gmail.com </a>
                    </small>
                    <br />
                    <small className="">
                        <a href="https://wa.me/00963960990506" target="_blank">
                            <i className="fa fa-mobile" /> 00963 960 990 506 </a></small><a href="https://wa.me/00963960990506" target="_blank">
                    </a>
                </div>
                <p>
                    Made With <i className="fas fa-heart text-danger"></i> By <a
                        href="https://alaa-sufi-portfolio.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-underline"
                    >
                        Alaa Sufi</a> © <script>document.write(new Date().getFullYear())</script>2023.
                </p>
            </div>
        </footer>
    )
}