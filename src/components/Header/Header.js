import React from 'react';
import HeaderCSS from './Header.module.css';

const Header = () => {
	return (
		<header className={HeaderCSS.header}>
			<div className={HeaderCSS.headerImg}>
				<img
					className={HeaderCSS.img}
					src="https://s1.cdn.autoevolution.com/images/news/race-flags-formula-one-8085-7.jpg"
					alt=""
				/>
				<h1 className={HeaderCSS.title}>Formula one start</h1>
				<img
					className={HeaderCSS.img}
					src="https://c4.wallpaperflare.com/wallpaper/468/673/315/line-black-black-amg-lines-hd-wallpaper-preview.jpg"
					alt=""
				/>
			</div>
		</header>
	);
};

export default Header;
