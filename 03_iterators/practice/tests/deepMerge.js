import test from 'tape-catch';
import _merge from 'lodash.merge';
import deepMerge from '../exercises/deepMerge';

const destinationObject = {
  forgeFrontend: {
    coaches: [{ name: 'Coache 1' }, { name: 'Coache 2' }],
    students: ['Student 1', 'Student 2']
  },
  forgeBackend: {
    coaches: ['Coache 1', 'Coache 2']
  },
  forgeMaintaince: [
    {
      part1: {
        students: ['Student 7', 'Student 8']
      }
    },
    {
      part2: {
        coaches: ['Coache 5', 'Coache 6']
      }
    }
  ]
};

const sourceObject = {
  forgeFrontend: {
    coaches: [{ surname: 'billibob' }, { surname: 'ivanov' }]
  },
  forgeBackend: {
    students: ['Student 3', 'Student 4']
  },
  forgeMaintaince: [
    {
      part1: {
        students: ['Student 9', 'Student 10']
      }
    },
    {
      part2: {
        coaches: ['Coache 7', 'Coache 8']
      }
    }
  ]
};

const destinationObject1 = {
  students: [{ name: 'Unit 1' }, { name: 'Unit 2' }],
  label: 'backend',
  count: 1
};

const sourceObject1 = {
  students: [{ surname: 'Forge 1' }, { surname: 'Forge 2' }],
  label: 'frontend'
};

test('deepMerge', t => {
  t.equal(typeof deepMerge, 'function');

  const deepMergeResult = deepMerge(destinationObject, sourceObject);
  const expectedMergeResult = _merge(destinationObject, sourceObject);
  const deepMergeResult1 = deepMerge(destinationObject1, sourceObject1);
  const expectedMergeResult1 = _merge(destinationObject1, sourceObject1);

  t.test('deep merge two objects', tt => {
    tt.deepEqual(deepMergeResult, expectedMergeResult);
    tt.end();
  });

  t.test('deep merge two objects', tt => {
    tt.deepEqual(deepMergeResult1, expectedMergeResult1);
    tt.end();
  });

  t.end();
});
