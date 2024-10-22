import logo from './logo.svg';
import './App.css';

function App() {
  const twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      const sum = numbers[left] + numbers[right];

      if (sum === target) {
        return [left + 1, right + 1];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return [];
  }

  console.log('twoSum([4, 11, 17, 25], 21) is: ', twoSum([4, 11, 17, 25], 21));
  console.log('twoSum([0, 1, 2, 2, 3, 5], 4) is: ', twoSum([0, 1, 2, 2, 3, 5], 4));
  console.log('twoSum([-1, 0], -1) is: ', twoSum([-1, 0], -1));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Inspect the Console to view the answer for Two Sum II - Input Array Is Sorted
        </p>
      </header>
    </div>
  );
}

export default App;
