def transform(df):

    # remove duplicate rows
    df.drop_duplicates(inplace=True)

    # fill empty cells
    df.fillna("", inplace=True)

    return df