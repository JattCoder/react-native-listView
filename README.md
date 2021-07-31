#  Installation

`npm i animatedListView`

# Usage

`import { AnimatedList } from 'npm i react-native-animated-listview'`

```
const design = (item) => {
    return (
      <View style={Styles.designFrame}>
        <TouchableOpacity style={Styles.buttonFrame}>
          <Image style={Styles.UImage} source={{uri: item.avatar}} />
          <View style={Styles.UserInfo}>
            <Text style={Styles.UserName}>{`${item.first_name} ${item.last_name}`}</Text>
            <Text style={Styles.UserEmail}>{item.email}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
}
```

```
<AnimatedList
    data={data}
    design={design}
    isVisible
    animation
    animSpeed={0.5}
    shadow
    shadowColor={'red'}
    shadowOpacity={0.4}
/>
```

# Props

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Required</th>
            <th>Type</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>data</td>
            <td>Yes</td>
            <td>Array</td>
            <td>None</td>
        </tr>
        <tr>
            <td>design</td>
            <td>Yes</td>
            <td>Method</td>
            <td>None</td>
        </tr>
        <tr>
            <td>isVisible</td>
            <td>Yes</td>
            <td>Boolean</td>
            <td>False</td>
        </tr>
        <tr>
            <td>animation</td>
            <td>No</td>
            <td>Boolean</td>
            <td>False</td>
        </tr>
        <tr>
            <td>animSpeed</td>
            <td>No</td>
            <td>Float</td>
            <td>0.5</td>
        </tr>
        <tr>
            <td>shadow</td>
            <td>No</td>
            <td>Boolean</td>
            <td>False</td>
        </tr>
        <tr>
            <td>shadowColor</td>
            <td>No</td>
            <td>String</td>
            <td>Black</td>
        </tr>
        <tr>
            <td>shadowOpacity</td>
            <td>No</td>
            <td>Float</td>
            <td>0.5</td>
        </tr>
    </tbody>
</table>

# Contribution

For major changes, please open an issue first to discuss what you would like to change.