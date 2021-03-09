import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact 
        name = 'Arianna Lowe'
        avatar = 'https://randomuser.me/api/portraits/women/18.jpg'
        online
      />
      <Contact 
        name = 'Paul Taylor'
        avatar = 'https://randomuser.me/api/portraits/men/36.jpg'
        online
      />
      <Contact 
        name = 'Brennan Lucas'
        avatar = 'https://randomuser.me/api/portraits/men/18.jpg'
      />
    </div>
  );
}

export default App;
