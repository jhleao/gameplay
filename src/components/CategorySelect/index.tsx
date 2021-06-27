import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { categories } from '../../utils/categories';
import { Category } from '@components/Category';

import { styles } from './styles';

type Props = {
  categorySelected: string;
  setCategory: (id: string) => void;
  hasCheckbox?: boolean;
}

export function CategorySelect({ categorySelected, setCategory, hasCheckbox = false } : Props) {

  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          Icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)} 
          hasCheckbox={hasCheckbox}
        />
      ))}
    </ScrollView>
  )
}