import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/GlobalStyles";
import Input from "./Input";
import StarRating from "../UI/StarRating";
import Button from "../UI/Button";
import { getFormattedDate } from "../../utils/date";

function BookForm({ onCancel, onSumbit, defaultValue }) {
  const [inputs, setInputs] = useState({
    title: { value: defaultValue ? defaultValue.title : "", isValid: true },
    author: { value: defaultValue ? defaultValue.author : "", isValid: true },
    page: {
      value: defaultValue ? defaultValue.page.toString() : "",
      isValid: true,
    },
    finishedDate: {
      value: defaultValue ? getFormattedDate(defaultValue.finishedDate) : "",
      isValid: true,
    },
    rating: {
      value: defaultValue ? defaultValue.rating.toString() : 0,
      isValid: true,
    },
    memo: { value: defaultValue ? defaultValue.memo : "", isValid: true },
  });

  function sumbitHandler() {
    const bookData = {
      title: inputs.title.value,
      author: inputs.author.value,
      page: +inputs.page.value,
      finishedDate: new Date(inputs.finishedDate.value),
      rating: +inputs.rating.value,
      memo: inputs.memo.value,
    };

    const titleIsValid = bookData.title.trim().length > 0;
    const authorIsValid = bookData.author.trim().length > 0;
    const pageIsValid = !isNaN(bookData.page) && bookData.page > 0;
    const finishedDateIsValid =
      bookData.finishedDate.toString() !== "Invalid Date";
    const ratingIsValid = !isNaN(bookData.rating) && bookData.rating > 0;

    if (
      !titleIsValid ||
      !authorIsValid ||
      !pageIsValid ||
      !finishedDateIsValid ||
      !ratingIsValid
    ) {
      setInputs((curInputs) => {
        return {
          title: {
            value: curInputs.title.value,
            isValid: titleIsValid,
          },
          author: {
            value: curInputs.author.value,
            isValid: authorIsValid,
          },
          page: {
            value: curInputs.page.value,
            isValid: pageIsValid,
          },
          finishedDate: {
            value: curInputs.finishedDate.value,
            isValid: finishedDateIsValid,
          },
          rating: {
            value: curInputs.rating.value,
            isValid: ratingIsValid,
          },
          memo: { value: curInputs.memo.value, isValid: true },
        };
      });
      return;
    }
    onSumbit(bookData);
  }

  function inputChangeHandler(inputId, enteredValue) {
    setInputs((curInputs) => ({
      ...curInputs,
      [inputId]: { value: enteredValue, isValid: true },
    }));
  }
  const formIsInvalid =
    !inputs.title.isValid ||
    !inputs.author.isValid ||
    !inputs.page.isValid ||
    !inputs.finishedDate.isValid ||
    !inputs.rating.isValid;

  return (
    <View style={styles.container}>
      <Input
        title="제목"
        isInvalid={!inputs.title.isValid}
        value={inputs.title.value}
        placeholder="책 제목"
        onChangeText={inputChangeHandler.bind(this, "title")}
      />
      <Input
        title="저자"
        isInvalid={!inputs.author.isValid}
        value={inputs.author.value}
        placeholder="지은이"
        onChangeText={inputChangeHandler.bind(this, "author")}
      />
      <View style={styles.metaContainer}>
        <Input
          title="페이지"
          isInvalid={!inputs.page.isValid}
          value={inputs.page.value}
          placeholder="0"
          containerStyle={styles.flexInput}
          onChangeText={inputChangeHandler.bind(this, "page")}
        />
        <Input
          title="완독일"
          isInvalid={!inputs.finishedDate.isValid}
          value={inputs.finishedDate.value}
          placeholder="2026-10-01"
          containerStyle={styles.flexInput}
          onChangeText={inputChangeHandler.bind(this, "finishedDate")}
        />
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingTitleTextStyle}>별점</Text>
        <StarRating
          size={32}
          rating={inputs.rating.value}
          onPress={inputChangeHandler.bind(this, "rating")}
          isInvalid={!inputs.rating.isValid}
        />
      </View>
      <Input
        title="한 줄 메모 (선택)"
        value={inputs.memo.value}
        placeholder="기억에 남는 한 줄을 적어보세요"
        multiline={true}
        onChangeText={inputChangeHandler.bind(this, "memo")}
      />
      {formIsInvalid && (
        <Text style={styles.validErrorTextStyle}>입력값을 확인해주세요. 빨간 항목을 고쳐주세요.</Text>
      )}
      <View style={styles.buttonsContainer}>
        <Button
          title="취소"
          mode="flat"
          style={styles.buttonStyle}
          onPress={onCancel}
        />
        <Button
          title="추가"
          style={styles.buttonStyle}
          onPress={sumbitHandler}
        />
      </View>
    </View>
  );
}

export default BookForm;

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingHorizontal: 4,
    gap: 16,
  },
  metaContainer: {
    flexDirection: "row",
    gap: 8,
  },
  ratingContainer: {
    gap: 6,
  },
  ratingTitleTextStyle: {
    ...GlobalStyles.fonts.label,
    color: GlobalStyles.colors.gray700,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  buttonStyle: {
    minWidth: 120,
  },
  flexInput: {
    flex: 1,
  },
  validErrorTextStyle: {
    ...GlobalStyles.fonts.sub,
    color: GlobalStyles.colors.error500,
    textAlign: "center",
  },
});
