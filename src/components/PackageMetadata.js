import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MetadataWrapper = styled.div`
  background: #bec4d038;
  padding: 32px;
  overflow: scroll;
`;

const MetadataFieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 36px;
`;

const MetadataTitle = styled.div`
  flex-basis: 140px;
  font-weight: bold;
`;

const MetadataValue = styled.div`
  flex-grow: 2;
  text-align: left;
`;

const Pre = styled.pre`
  margin: 0;
`;

const UlInDetail = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const MetadataField = ({ title, value }) => {
  return (
    <MetadataFieldWrapper>
      <MetadataTitle>{title}</MetadataTitle>
      <MetadataValue>{value}</MetadataValue>
    </MetadataFieldWrapper>
  );
};

const DependenciesList = ({ dependencies = {} }) => {
  const depsList = Object.entries(dependencies).map(([name, version]) => (
    <li key={name}>
      <Pre>
        {name}@{version}
      </Pre>
    </li>
  ));
  return depsList.length === 0 ? (
    <span>No Dependencies</span>
  ) : (
    <UlInDetail>{depsList}</UlInDetail>
  );
};

const PackageMetadata = ({ pkg }) => {
  if (!pkg) return null;
  const { name, version, license, repository, homepage, dependencies } = pkg;
  return (
    <MetadataWrapper>
      <MetadataField title="Name" value={<Pre>{name}</Pre>} />
      <MetadataField title="Latest" value={version} />
      <MetadataField title="License" value={license} />
      <MetadataField title="Installation" value={<Pre>yarn add {name}</Pre>} />
      <MetadataField
        title="Links"
        value={
          <ul>
            {homepage && (
              <li>
                <a href={homepage}>README</a>
              </li>
            )}
            {repository.url && (
              <li>
                <a href={repository.url}>Source</a>
              </li>
            )}
          </ul>
        }
      />

      <MetadataField
        title={`Dependencies (${Object.entries(dependencies || {}).length})`}
        value={<DependenciesList dependencies={dependencies} />}
      />
    </MetadataWrapper>
  );
};

PackageMetadata.propTypes = {
  /** The package.json as object */
  pkg: PropTypes.object.isRequired
};

export default PackageMetadata;
