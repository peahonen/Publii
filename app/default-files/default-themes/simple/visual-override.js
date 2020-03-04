/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {
    let output = '';
    
      if (
        params.pageWidth !== '42rem' ||
        params.logoColor !== '#FFFFFF' || 
        params.primaryColor !== '#D73A42' || 
        params.textColor !== '#17181E' || 
        params.headingColor !== '#17181E' || 
        params.linkColor !== '#D73A42' || 
        params.linkHoverColor !== '#17181E' ||
        params.backgroundMenu !== '#17181E' ||
        params.linkColorMenu !== '#FFFFFF' ||
        params.linkHoverColorMenu !== 'rgba(255,255,255,0.7)' ||          
        params.submenuBg !== '#17181E' ||
        params.submenuLinkColor !== 'rgba(255,255,255,0.7)' ||
        params.submenuLinkHoverColor !== '#FFFFFF' ||
        params.submenuLinkHoverBgMenu !== 'rgba(255,255,255,0.05)' ||
        params.submenuBg !== '#17181E' ||          
        params.fontHeadignsWeight !== '700' ||
        params.fontHeadingsTransform !== 'none' ||
        params.heightHero !== '80vh' ||
        params.heroBackground !== '#17181E' ||
        params.heroHeadingColor !== '#FFFFFF' ||
        params.heroTextColor !== 'rgba(255,255,255,0.75)' ||
        params.heroLink !== '#FFFFFF' ||
        params.heroLinkHover !== 'rgba(255,255,255,0.75)' ||
        params.heroBorderColor !== 'rgba(255,255,255,0.3)' || 
        params.footerBg !== '#17181E' ||
        params.footerTextColor !== '#747577' ||
        params.footerLinkColor !== '#FFFFFF' ||
        params.footerLinkHoverColor !== 'rgba(255,255,255,0.7)') {
        output += `
        :root {
           --entry-width:        ${params.pageWidth}; 
           --page-margin:        6vw;  
           --dark:               #17181E;
           --gray-1:             #61666C;
           --gray-2:             #747577;
           --gray-3:             #E6E7EB;
           --gray-4:             #F7F8FB;
           --bg-color:           #FFFFFF;
           --logo-color:         ${params.logoColor}; 
           --primary-color:      ${params.primaryColor};   
           --text-color:         ${params.textColor}; 
           --headings-color:     ${params.headingColor};
           --border-color:       #D1D1D2;
           --link-color:         ${params.linkColor}; 
           --link-color-hover:   ${params.linkHoverColor};         
           --navbar-bg:          ${params.backgroundMenu}; 
           --navbar-link-color:  ${params.linkColorMenu}; 
           --navbar-link-color-hover: ${params.linkHoverColorMenu}; 
           --navbar-icon:        #FFFFFF;
           --dropdown-menu-bg:   ${params.submenuBg}; 
           --dropdown-menu-link-color: ${params.submenuLinkColor}; 
           --dropdown-menu-link-color-hover: ${params.submenuLinkHoverColor}; 
           --dropdown-menu-link-background-hover: ${params.submenuLinkHoverBgMenu}; 
           --mobile-menu-bg:     #FFFFFF;
           --mobile-menu-link-color: #17181E;
           --mobile-menu-link-color-hover: #17181E;
           --headings-weight:    ${params.fontHeadignsWeight};
           --headings-transform: ${params.fontHeadingsTransform};
           --hero-height:        ${params.heightHero};
           --hero-bg:            ${params.heroBackground};
           --hero-heading-color: ${params.heroHeadingColor};
           --hero-text-color:    ${params.heroTextColor};
           --hero-link-color:    ${params.heroLink};
           --hero-link-color-hover: ${params.heroLinkHover};
           --hero-border-color:  ${params.heroBorderColor};
           --footer-bg: ${params.footerBg};
           --footer-text-color:    ${params.footerTextColor};
           --footer-link-color:    ${params.footerLinkColor};
           --footer-link-color-hover: ${params.footerLinkHoverColor};
        }`;
    } 
    
    if (params.minFontSize !== '1.1' || params.maxFontSize !== '1.2') {
        output += `
        html {
          font-size: ${params.minFontSize}rem;
        }

        @media screen and (min-width: 20rem) {
          html {
               font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 50));
            }
        }

        @media screen and (min-width: 70rem) {
          html {
               font-size: ${params.maxFontSize}rem;
            }
        }`;
    }

    if (params.primaryColor !== '#D73A42') {
        output += `
      
        input[type=checkbox]:checked + label:before{
               background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8'%3e%3cpolygon points='9.53 0 4.4 5.09 1.47 2.18 0 3.64 2.93 6.54 4.4 8 5.87 6.54 11 1.46 9.53 0' fill='${params.primaryColor.replace('#', '%23')}'/%3e%3c/svg%3e");
        }

        input[type=radio]:checked + label:before {
               background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3ccircle cx='4' cy='4' r='4' fill='${params.primaryColor.replace('#', '%23')}'/%3e%3c/svg%3e");
        

        }`;
    }

    if (params.submenu === 'custom') {
        output += `
        .navbar .navbar__submenu {
               width: ${params.submenuWidth}px;     
        }
        .navbar .has-submenu .has-submenu:active > .navbar__submenu,
        .navbar .has-submenu .has-submenu:focus > .navbar__submenu,
        .navbar .has-submenu .has-submenu:hover > .navbar__submenu {
               left: ${params.submenuWidth}px;  
        }
        .navbar .has-submenu .has-submenu:active > .navbar__submenu.is-right-submenu,
        .navbar .has-submenu .has-submenu:focus > .navbar__submenu.is-right-submenu,
        .navbar .has-submenu .has-submenu:hover > .navbar__submenu.is-right-submenu {
               left: -${params.submenuWidth}px; 
        }`;
    }   

    if (params.heroOverlay === 'color') {
        if (params.heroOverlayColor) {
            output += `
            .hero__image--overlay::after { 
                  background: ${params.heroOverlayColor};
           }`;
        }
    }

    if (params.heroOverlay === 'gradient') {
        if (params.heroOverlayGradientDirection !== 'bottom' || params.heroOverlayGradient) {
            output += `
           .hero__image--overlay::after {              
                  background: linear-gradient(to ${params.heroOverlayGradientDirection}, transparent 0%, ${params.heroOverlayGradient} 100%);
           }`;
        }
    }

    if (params.galleryItemGap !== '0.28333rem') {
        output += `
        .gallery {
               margin: calc(1.7rem + 1vw) -${params.galleryItemGap};
        }
        .gallery__item {
               padding: ${params.galleryItemGap};
        }
        
        .gallery__item a::after {
               bottom: ${params.galleryItemGap};
               height: calc(100% - ${params.galleryItemGap} * 2);              
               left: ${params.galleryItemGap};
               right: ${params.galleryItemGap};
               top: ${params.galleryItemGap};
               width: calc(100% - ${params.galleryItemGap} * 2);  
        }`;
    }
    
    if(params.search) {
        output += ` 
         .search-page table { 
               border: none;
               margin: 0;
         }

         .search-page table td { 
               border: none;
               padding: 0;
         }

         .gsc-above-wrapper-area-container,
         .gsc-table-result {
               display: inline-table;
               margin-top: 0;
               white-space: normal;
         }

         .cse .gsc-control-cse, .gsc-control-cse {
               padding: 0 !important;
         }

         .gsc-thumbnail-inside,
         .gsc-url-top {
               padding: 0 !important;
         }

         .gsc-control-cse, .gsc-control-cse .gsc-table-result {
               font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;  
               font-size: 0.8888rem !important;
         }

         .gs-title  {       
               font-weight: bold;
               height: auto !important; 
               margin-bottom: 0.53333rem;
               text-decoration: none !important; 
         }

         .gsc-result{
               border-bottom: 1px solid #E9E9E9 !important; 
               padding: calc(1.13332rem + .5vw) 0 !important; 
 
        }`;    	 
    }	

    if(params.lazyLoadEffect === 'fadein') {
        output += ` 
         img[loading] {
               opacity: 0;
         }

         img.is-loaded {
               opacity: 1;
               transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1); 
         }`;    	 
    } 
        
  
    return output;
}

module.exports = generateOverride;
