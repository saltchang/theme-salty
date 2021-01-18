import Module, { SubModule } from 'modules';

function Func(param) {
  const TEXT = 'string';

  let int = 100;
  let arr = [{ key: int }];

  // Comment
  arr.forEach(item => {
    console.log(String(item.key));
  });

  return (
    <div>
      <h1>{TEXT}</h1>
      <h2>String - {Module.name}</h2>
    </div>
  );
}


Func()

