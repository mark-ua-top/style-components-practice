import './App.css';
import styled from 'styled-components';

const ArcicleElement = styled.article`
background-color: #f8ad44ff;
outline: 3px solid;
padding: 20px;
height: auto;
width: 1200px;
margin-left: auto;
margin-right: auto;
margin-top: 200px;
margin-bottom: 200px;
`

const Title = styled.h1`
font-size: 200;
color: #212121;
font-weight: 600;
`

const Image = styled.img`
width: 400px; 
height: 300px;
`

const Recept = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
font-size: 25px;
padding: 20px;
list-style: none;
`

const Step = styled.li`
background-color: #e4e4e45e;
padding: 10px;
border-radius: 5px;
font-size: 20px;  
`

// const LikeBtn = styled.button < { $btnBg: string } > `
// background-color: #f05454;
// display: block;
// padding: 10px;
// border-radius: 50px;
// border: none;
// margin-left: auto;
// `

function App() {
  return (
    <div className="App">
      <ArcicleElement>
        <Title>
          Рецепт млинців
        </Title>
        <Image src="https://klopotenko.com/wp-content/uploads/2018/02/yak-prigotuvaty-mlynci_siteweb-ukr-1-img-1000x600.jpg?v=1720543412" />
        <Recept>
          Млинці на молоці: покроковий рецепт
          <Step>Крок 1: В миску, в якій будете замішувати тісто вбийте 2 яйця, додайте 2 ст. л цукру, 1/3 ч. л. солі та влийте 2 ст. л соняшникової олії. перемішуйте віничком до об’єднання компонентів.</Step>

          <Step>Крок 2: Влийте 340 мл молока та знову перемішайте віничком. Цукор і сіль мають повністю розчинитися.</Step>
          <Step>Крок 3: Порціями додавайте 130 г борошна та продовжуйте добре вимішувати віничком. У вас має вийти рідке тісто. Залиште його відпочивати на 10 хвилин.</Step>
          <Step>Крок 4: Змастіть розігріту пательню соняшниковою олією за допомогою кулінарного пензлика.
          </Step>
          <Step>Крок 5: Ополоником виливайте тісто на середину сковорідку та розподіляйте її по всьому дну, нахиляючи пательню з боку в бік.
          </Step>
          <Step>Крок 6: Як краї млинця стануть коричневими, перевертайте його на інший бік. Так само смажте всі млинці та складайте їх один на один. За бажанням кожен змащуйте вершковим маслом. Радимо придбати підписку на наш сайт, щоб відключити рекламу та створити зручну кулінарну книгу з рецептами.
          </Step>
        </Recept>
        {/* <LikeBtn $btnBg>"🤍"</LikeBtn> */}
      </ArcicleElement>
    </div>
  );
}

export default App;
