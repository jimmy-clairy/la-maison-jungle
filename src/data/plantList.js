import monstera from '../assets/img/img_webp_500x500/monstera.webp'
import lyrata from '../assets/img/img_webp_500x500/lyrata.webp'
import pothos from '../assets/img/img_webp_500x500/pothos.webp'
import succulent from '../assets/img/img_webp_500x500/succulent.webp'
import olivier from '../assets/img/img_webp_500x500/olivier.webp'
import basil from '../assets/img/img_webp_500x500/basil.webp'
import mint from '../assets/img/img_webp_500x500/mint.webp'
import calathea from '../assets/img/img_webp_500x500/calathea.webp'
import cactus from '../assets/img/img_webp_500x500/cactus.webp'

export const plantList = [
    {
        name: 'monstera',
        category: 'classique',
        id: '1ed',
        light: 2,
        water: 3,
        cover: monstera,
        price: 15,
        info: `<p>La Monstera, également connue sous le nom de "plante à fromage suisse", est une plante d'intérieur très prisée. Elle se distingue par ses grandes feuilles découpées et ses motifs en forme de trous, apportant une touche tropicale à tout espace.</p>
        <p>Facile à entretenir, la Monstera préfère une exposition à la lumière indirecte et un arrosage régulier.</p>
        <p>Elle ajoute une esthétique spectaculaire et une purification de l'air à votre intérieur.</p>
        `
    },
    {
        name: 'calathea',
        category: 'classique',
        id: '4kk',
        light: 2,
        water: 3,
        cover: calathea,
        price: 20,
        info: `<p>La Calathea est une plante d'intérieur prisée pour ses magnifiques feuilles aux motifs et couleurs variés.</p>
        <p>Originaire des régions tropicales d'Amérique du Sud, elle apporte une touche exotique à tout intérieur.</p>
        <p>Les feuilles de la Calathea sont souvent marbrées, striées ou ornées de motifs complexes, offrant un aspect visuellement captivant.</p>
        <p>Cette plante nécessite une exposition à la lumière indirecte et des soins attentifs, notamment un arrosage régulier et une humidité ambiante élevée.</p>
        <p>Avec ses caractéristiques uniques, la Calathea est idéale pour créer une ambiance naturelle et luxuriante dans votre espace de vie.</p>
        `
    },
    {
        name: 'olivier',
        category: 'extérieur',
        id: '5pl',
        light: 3,
        water: 1,
        cover: olivier,
        price: 25,
        info: `<p>L'olivier est un arbre emblématique méditerranéen apprécié pour son feuillage argenté et son fruit, l'olive.</p>
        <p>Cette plante résistante et rustique peut vivre pendant des siècles et est associée à la paix et à la sagesse.</p>
        <p>Les feuilles persistantes de l'olivier sont étroites et allongées, ajoutant une touche élégante à tout paysage.</p>
        <p>Il préfère les climats chauds et ensoleillés, et son fruit est utilisé pour produire de l'huile d'olive.</p>
        <p>Ajoutez un air méditerranéen à votre jardin avec l'olivier, symbole de la beauté et de la durabilité.</p>
        `
    },
    {
        name: 'cactus',
        category: 'plante grasse',
        id: '8fp',
        light: 2,
        water: 1,
        cover: cactus,
        price: 6,
        info: `<p>Le cactus est une plante succulente emblématique connue pour sa capacité à stocker l'eau dans ses tissus charnus.</p>
        <p>Ces plantes épineuses sont originaires des régions arides et peuvent survivre dans des conditions extrêmement sèches.</p>
        <p>Avec leurs formes variées et leurs épines colorées, les cactus ajoutent une touche exotique à tout décor.</p>
        <p>Ils nécessitent peu d'entretien, préférant un ensoleillement intense et un arrosage modéré.</p>
        <p>Apportez une touche désertique et résistante à votre intérieur ou à votre jardin avec ces plantes étonnantes.</p>
        `
    },
    {
        name: 'basilic',
        category: 'extérieur',
        id: '7ie',
        light: 2,
        water: 3,
        cover: basil,
        price: 5,
        info: `<p>Le basilic est une plante aromatique populaire cultivée pour ses feuilles parfumées utilisées en cuisine.</p>
        <p>Cette plante herbacée annuelle offre une saveur fraîche et caractéristique, souvent associée à la cuisine méditerranéenne.</p>
        <p>Les feuilles du basilic sont de forme ovale et d'un vert vif, ajoutant une touche de beauté à tout jardin ou potager.</p>
        <p>Elle préfère un ensoleillement direct et un sol bien drainé, nécessitant un arrosage régulier mais modéré.</p>
        <p>Ajoutez de la fraîcheur à vos plats avec le basilic, une herbe polyvalente et délicieuse à avoir sous la main.</p>
        `
    },
    {
        name: 'pothos argenté',
        category: 'classique',
        id: '3sd',
        light: 1,
        water: 2,
        cover: pothos,
        price: 9,
        info: `<p>Le Pothos Argenté, également connu sous le nom de Scindapsus Pictus, est une plante d'intérieur populaire appréciée pour ses feuilles panachées.</p>
        <p>Les feuilles du Pothos Argenté sont vert foncé avec des marbrures argentées, créant un effet visuel attrayant.</p>
        <p>Cette plante grimpante est facile à entretenir et s'adapte bien à diverses conditions d'éclairage, du faible à la lumière indirecte vive.</p>
        <p>Le Pothos Argenté peut être cultivé en suspension ou grimpant le long de supports, ajoutant une touche de verdure élégante à tout espace intérieur.</p>
        <p>Avec son aspect décoratif et sa tolérance à des conditions variables, le Pothos Argenté est un choix idéal pour les amateurs de plantes d'intérieur.</p>
        `
    },
    {
        name: 'succulente',
        category: 'plante grasse',
        id: '9vn',
        light: 2,
        water: 1,
        cover: succulent,
        price: 8,
        info: `<p>Les plantes succulentes sont des plantes charnues capables de stocker l'eau dans leurs feuilles, tiges ou racines.</p>
        <p>Ces plantes adaptées aux climats secs viennent dans une grande variété de formes, de tailles et de couleurs.</p>
        <p>Avec leur capacité à survivre dans des conditions arides, les plantes succulentes sont faciles à entretenir et résistantes.</p>
        <p>Elles ajoutent une touche exotique et texturée à tout jardin, pot ou arrangement de plantes d'intérieur.</p>
        <p>Que vous choisissiez un Echeveria, un Aloe Vera ou un Cactus, les plantes succulentes sont une belle addition à votre collection de plantes.</p>
        `
    },
    {
        name: 'ficus lyrata',
        category: 'classique',
        id: '2ab',
        light: 3,
        water: 1,
        cover: lyrata,
        price: 16,
        info: `<p>Le Ficus Lyrata, également connu sous le nom de Figuier lyre, est une plante d'intérieur élégante et majestueuse.</p>
        <p>Ses grandes feuilles vert foncé et brillantes ressemblent à des violons, d'où son nom lyre.</p>
        <p>Cette plante tropicale préfère une exposition à la lumière indirecte vive et un arrosage régulier.</p>
        <p>Avec son apparence saisissante et son feuillage luxuriant, le Ficus Lyrata ajoute une touche de sophistication à tout intérieur.</p>
        <p>Apportez une ambiance tropicale et une présence impressionnante à votre espace avec cette magnifique plante.</p>
        `
    },
    {
        name: 'menthe',
        category: 'extérieur',
        id: '6uo',
        light: 2,
        water: 2,
        cover: mint,
        price: 4,
        info: `<p>La menthe est une plante aromatique appréciée pour son parfum rafraîchissant et ses utilisations culinaires et médicinales.</p>
        <p>Ses feuilles vertes et vibrantes dégagent une odeur mentholée et peuvent être utilisées pour préparer des infusions, des cocktails et des plats.</p>
        <p>Cette plante vigoureuse peut être cultivée en pot ou en pleine terre et préfère une exposition à la lumière indirecte.</p>
        <p>La menthe nécessite un arrosage régulier et un sol bien drainé pour prospérer et se propage rapidement grâce à ses rhizomes souterrains.</p>
        <p>Ajoutez une touche de fraîcheur à votre jardin ou à vos recettes avec cette plante polyvalente et délicieuse.</p>
        `
    }
]